import React, { useState } from 'react';
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/select";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table";
import { Tooltip } from "@nextui-org/tooltip";
import { Chip } from "@nextui-org/chip";
import interestsData from "../data/interestsData";
import skillsData from "../data/skillsData";
import interestsByField from "../data/interestsByField";
import skillsByField from "../data/skillsByField";
import universityData from "../data/universityData";
import examGroupsData from "../data/examGroupsData";

const RecommendationTab = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedStrengths, setSelectedStrengths] = useState([]);
  const [matchingUniversitiesByInterest, setMatchingUniversitiesByInterest] = useState([]);
  const [matchingUniversitiesByStrength, setMatchingUniversitiesByStrength] = useState([]);
  const [matchingUniversitiesByCommon, setMatchingUniversitiesByCommon] = useState([]);
  const [showResults, setShowResults] = useState(false);
  // State để kiểm soát hiển thị "xem thêm"
  const [showMoreInterest, setShowMoreInterest] = useState(false);
  const [showMoreStrength, setShowMoreStrength] = useState(false);
  const [showMoreCommon, setShowMoreCommon] = useState(false);
  
  const [scores, setScores] = useState({
    literature: "",
    math: "",
    english: "",
    physics: "",
    chemistry: "",
    biology: "",
    history: "",
    geography: "",
    gdktpl: ""
  });

  const subjectMapping = {
    "ngữ văn": "literature",
    "toán": "math",
    "tiếng anh": "english",
    "vật lí": "physics",
    "hóa học": "chemistry",
    "sinh học": "biology",
    "lịch sử": "history",
    "địa lí": "geography",
    "giáo dục kinh tế và pháp luật": "gdktpl"
  };
  
  const calculateExamScores = (examGroups, scores, note) => {
    return examGroups.map(group => {
      const examGroup = examGroupsData.find(item => item.group === group);
      if (!examGroup || !examGroup.subjects) return { group, score: "Không có dữ liệu" };
  
      const subjects = examGroup.subjects.split(", ").map(sub => sub.trim().toLowerCase());
      let totalScore = 0;
  
      subjects.forEach(subject => {
        const key = subjectMapping[subject];
        let subjectScore = key && scores[key] ? parseFloat(scores[key]) : 0;
        
        // Xác định hệ số của môn học (mặc định là 1)
        let coefficient = 1;
        if (note) {
          const regex = new RegExp(`\\b${subject} hệ số (\\d+)\\b`, 'i');
          const match = note.match(regex);
          if (match) {
            coefficient = parseInt(match[1], 10) || 1;
          }
        }
        
        totalScore += subjectScore * coefficient;
      });
  
      return { group, score: totalScore };
    });
  };

  const getUniversities = (recommendedFields, universityData, scores) => {
    if (recommendedFields.length === 0) return [];
  
    return Object.values(universityData).flatMap(university =>
      university.filter(program => recommendedFields.includes(program["Nhóm ngành đào tạo"])).map(program => {
        const examGroups = typeof program["Tổ hợp môn"] === "string" 
          ? program["Tổ hợp môn"].split("; ").map(g => g.trim()) 
          : [];
        const examScores = calculateExamScores(examGroups, scores, program["Ghi chú"]);
  
        return {
          "Trường": program["Trường đào tạo"],
          "Nhóm ngành": program["Nhóm ngành đào tạo"],
          "Ngành": program["Ngành đào tạo"],
          "Mã ngành": program["Mã ngành"],
          "Tổ hợp môn": program["Tổ hợp môn"] || "Không có dữ liệu",
          "Điểm chuẩn 2024": program["Điểm chuẩn 2024"] || "Không có dữ liệu",
          "Ghi chú": program["Ghi chú"] || "Không có dữ liệu",
          "Điểm theo tổ hợp": examScores
        };
      })
    );
  };

  // Hàm lọc kết quả dựa trên điểm chuẩn
  const filterQualifiedPrograms = (universities) => {
    return universities.filter(program => {
      // Nếu không có điểm chuẩn, giữ lại
      if (!program["Điểm chuẩn 2024"] || program["Điểm chuẩn 2024"] === "Không có dữ liệu") {
        return true;
      }

      const benchmarkScore = parseFloat(program["Điểm chuẩn 2024"]);
      
      // Kiểm tra xem có ít nhất một tổ hợp điểm đủ điều kiện
      const hasQualifiedExamGroup = program["Điểm theo tổ hợp"].some(examGroup => {
        // Nếu điểm tổ hợp là "Không có dữ liệu", giữ lại
        if (examGroup.score === "Không có dữ liệu") {
          return true;
        }

        // So sánh điểm tổ hợp của người dùng với điểm chuẩn
        return parseFloat(examGroup.score) >= benchmarkScore;
      });

      return hasQualifiedExamGroup;
    });
  };

  // Hàm sắp xếp kết quả theo điểm chuẩn giảm dần
  const sortByBenchmark = (universities) => {
    return [...universities].sort((a, b) => {
      // Nếu một trong hai không có điểm chuẩn, đặt nó xuống dưới
      if (!a["Điểm chuẩn 2024"] || a["Điểm chuẩn 2024"] === "Không có dữ liệu") return 1;
      if (!b["Điểm chuẩn 2024"] || b["Điểm chuẩn 2024"] === "Không có dữ liệu") return -1;
      
      // So sánh điểm chuẩn (giảm dần)
      return parseFloat(b["Điểm chuẩn 2024"]) - parseFloat(a["Điểm chuẩn 2024"]);
    });
  };

  // Xử lý thay đổi điểm số
  const handleScoreChange = (subject, value) => {
    if (value === "" || (Number(value) >= 0 && Number(value) <= 10)) {
      setScores(prev => ({
        ...prev,
        [subject]: value
      }));
    }
  };

  // Xử lý submit form
  const handleSubmit = () => {
    setShowResults(false);
    // Reset trạng thái "xem thêm"
    setShowMoreInterest(false);
    setShowMoreStrength(false);
    setShowMoreCommon(false);
    
    const interestFields = Object.entries(interestsByField)
      .filter(([_, interests]) => selectedInterests.some(interest => interests.includes(interest)))
      .map(([field]) => field);
  
    const strengthFields = Object.entries(skillsByField)
      .filter(([_, skills]) => selectedStrengths.some(strength => skills.includes(strength)))
      .map(([field]) => field);
  
    const commonFields = interestFields.filter(field => strengthFields.includes(field));
  
    // Lấy tất cả các trường đại học phù hợp
    const allInterestUniversities = getUniversities(interestFields, universityData, scores);
    const allStrengthUniversities = getUniversities(strengthFields, universityData, scores);
    const allCommonUniversities = getUniversities(commonFields, universityData, scores);

    // Lọc các trường đại học theo điểm chuẩn
    const filteredInterestUniversities = filterQualifiedPrograms(allInterestUniversities);
    const filteredStrengthUniversities = filterQualifiedPrograms(allStrengthUniversities);
    const filteredCommonUniversities = filterQualifiedPrograms(allCommonUniversities);
    
    // Sắp xếp kết quả theo điểm chuẩn giảm dần
    setMatchingUniversitiesByInterest(sortByBenchmark(filteredInterestUniversities));
    setMatchingUniversitiesByStrength(sortByBenchmark(filteredStrengthUniversities));
    setMatchingUniversitiesByCommon(sortByBenchmark(filteredCommonUniversities));
  
    setShowResults(true);
  };

  // Hàm để lấy danh sách hiển thị (10 trường đầu hoặc tất cả)
  const getDisplayList = (universities, showMore) => {
    if (showMore || universities.length <= 10) {
      return universities;
    }
    return universities.slice(0, 10);
  };

  // Render cell để hiển thị điểm theo tổ hợp
  const renderExamScoresCell = (examScores) => {
    return (
      <div className="space-y-1">
        {examScores.map((exam, idx) => (
          <div key={idx} className="flex">
            <span className="font-medium">{exam.group}:</span>
            <span className="ml-1">{exam.score}</span>
          </div>
        ))}
      </div>
    );
  };

  // Render bảng kết quả
  const renderResultTable = (universities, showMore, setShowMore, categoryName) => {
    const displayData = getDisplayList(universities, showMore);
    
    return (
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-800">
          Ngành học liên quan đến {categoryName}:
        </h3>
        
        {universities.length > 0 ? (
          <>
            <Table 
              aria-label={`Danh sách ngành học liên quan đến ${categoryName}`}
              classNames={{
                base: "max-w-full overflow-auto",
                table: "min-w-full",
              }}
            >
              <TableHeader>
                <TableColumn>Trường</TableColumn>
                <TableColumn>Nhóm ngành</TableColumn>
                <TableColumn>Ngành</TableColumn>
                <TableColumn>Mã ngành</TableColumn>
                <TableColumn>Tổ hợp môn</TableColumn>
                <TableColumn>Điểm chuẩn 2024</TableColumn>
                <TableColumn>Điểm theo tổ hợp</TableColumn>
                <TableColumn>Ghi chú</TableColumn>
              </TableHeader>
              <TableBody>
                {displayData.map((uni, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <span className="font-medium">{uni.Trường}</span>
                    </TableCell>
                    <TableCell>{uni["Nhóm ngành"]}</TableCell>
                    <TableCell>{uni.Ngành}</TableCell>
                    <TableCell>{uni["Mã ngành"]}</TableCell>
                    <TableCell>{uni["Tổ hợp môn"]}</TableCell>
                    <TableCell>
                      <Chip color="primary" variant="flat">
                        {uni["Điểm chuẩn 2024"]}
                      </Chip>
                    </TableCell>
                    <TableCell>
                      {renderExamScoresCell(uni["Điểm theo tổ hợp"])}
                    </TableCell>
                    <TableCell>
                      <Tooltip content={uni["Ghi chú"]}>
                        <Button size="sm" variant="light">Xem</Button>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            {universities.length > 10 && (
              <button 
                className="mt-3 px-4 py-2 text-blue-600 hover:text-blue-800 font-medium text-sm rounded-md transition-colors duration-200 flex items-center justify-center border border-blue-300 hover:border-blue-500 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Ẩn bớt" : `Xem thêm (${universities.length - 10})`}
              </button>
            )}
          </>
        ) : (
          <p className="text-gray-700">Không có ngành học phù hợp</p>
        )}
      </div>
    );
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 bg-white shadow-lg rounded-lg">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Sở thích và Sở trường */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Sở thích và Sở trường</h2>
          <div className="flex flex-wrap gap-6 justify-start">
            {/* Sở thích cá nhân */}
            <Select
              label="Sở thích cá nhân"
              placeholder="Chọn sở thích"
              selectionMode="multiple"
              className="flex-1 min-w-[250px]"
              selectedKeys={selectedInterests}
              onSelectionChange={(selected) => setSelectedInterests(Array.from(selected))}
            >
              {interestsData.map((interest) => (
                <SelectItem key={interest.label} value={interest.label}>
                  {interest.label}
                </SelectItem>
              ))}
            </Select>

            <Select
              label="Sở trường cá nhân"
              placeholder="Chọn sở trường"
              selectionMode="multiple"
              className="flex-1 min-w-[250px]"
              selectedKeys={selectedStrengths}
              onSelectionChange={(selected) => setSelectedStrengths(Array.from(selected))}
            >
              {skillsData.map((strength) => (
                <SelectItem key={strength.label} value={strength.label}>
                  {strength.label}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>

        {/* Điểm số các môn học */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Điểm số các môn học</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Input
              type="number"
              label="Văn học"
              placeholder="0-10"
              value={scores.literature}
              onChange={(e) => handleScoreChange('literature', e.target.value)}
              className="w-full"
            />
            <Input
              type="number"
              label="Toán"
              placeholder="0-10"
              value={scores.math}
              onChange={(e) => handleScoreChange('math', e.target.value)}
              className="w-full"
            />
            <Input
              type="number"
              label="Tiếng Anh"
              placeholder="0-10"
              value={scores.english}
              onChange={(e) => handleScoreChange('english', e.target.value)}
              className="w-full"
            />
            <Input
              type="number"
              label="Vật lý"
              placeholder="0-10"
              value={scores.physics}
              onChange={(e) => handleScoreChange('physics', e.target.value)}
              className="w-full"
            />
            <Input
              type="number"
              label="Hóa học"
              placeholder="0-10"
              value={scores.chemistry}
              onChange={(e) => handleScoreChange('chemistry', e.target.value)}
              className="w-full"
            />
            <Input
              type="number"
              label="Sinh học"
              placeholder="0-10"
              value={scores.biology}
              onChange={(e) => handleScoreChange('biology', e.target.value)}
              className="w-full"
            />
            <Input
              type="number"
              label="Lịch sử"
              placeholder="0-10"
              value={scores.history}
              onChange={(e) => handleScoreChange('history', e.target.value)}
              className="w-full"
            />
            <Input
              type="number"
              label="Địa lý"
              placeholder="0-10"
              value={scores.geography}
              onChange={(e) => handleScoreChange('geography', e.target.value)}
              className="w-full"
            />
            <Input
              type="number"
              label="Giáo dục kinh tế và pháp luật"
              placeholder="0-10"
              value={scores.gdktpl}
              onChange={(e) => handleScoreChange('gdktpl', e.target.value)}
              className="w-full"
            />
          </div>
        </div>

        {/* Nút nhận gợi ý */}
        <div className="pt-4">
          <Button 
            color="primary"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
            onPress={handleSubmit}
          >
            Nhận gợi ý
          </Button>
        </div>

        {/* Kết quả gợi ý */}
        {showResults && (
          <div className="pt-6 space-y-8">
            {/* Kết quả ngành học liên quan đến sở thích */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
              {renderResultTable(
                matchingUniversitiesByInterest, 
                showMoreInterest, 
                setShowMoreInterest, 
                "sở thích"
              )}
            </div>

            {/* Kết quả ngành học liên quan đến sở trường */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
              {renderResultTable(
                matchingUniversitiesByStrength, 
                showMoreStrength, 
                setShowMoreStrength, 
                "sở trường"
              )}
            </div>

            {/* Kết quả ngành học liên quan giữa sở thích và sở trường */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
              {renderResultTable(
                matchingUniversitiesByCommon, 
                showMoreCommon, 
                setShowMoreCommon, 
                "sở thích và sở trường"
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendationTab;