import React, { useState } from 'react';
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/select";
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

  const calculateExamScores = (examGroups, scores) => {
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

    return examGroups.map(group => {
      const examGroup = examGroupsData.find(item => item.group === group);
      if (!examGroup || !examGroup.subjects) return { group, score: "Không có dữ liệu" };

      const subjects = examGroup.subjects.split(", ").map(sub => sub.trim().toLowerCase());
      const totalScore = subjects.reduce((sum, subject) => {
        const key = subjectMapping[subject];
        return sum + (key && scores[key] ? parseFloat(scores[key]) : 0);
      }, 0);

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
        const examScores = calculateExamScores(examGroups, scores);
  
        return {
          "Trường": program["Trường đào tạo"],
          "Nhóm ngành": program["Nhóm ngành đào tạo"],
          "Ngành": program["Ngành đào tạo"],
          "Mã ngành": program["Mã ngành"],
          "Tổ hợp môn": program["Tổ hợp môn"] || "Không có dữ liệu",
          "Điểm chuẩn 2024": program["Điểm chuẩn 2024"] || "Không có dữ liệu",
          "Điểm theo tổ hợp": examScores
        };
      })
    );
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
    const interestFields = Object.entries(interestsByField)
      .filter(([_, interests]) => selectedInterests.some(interest => interests.includes(interest)))
      .map(([field]) => field);
  
    const strengthFields = Object.entries(skillsByField)
      .filter(([_, skills]) => selectedStrengths.some(strength => skills.includes(strength)))
      .map(([field]) => field);
  
    const commonFields = interestFields.filter(field => strengthFields.includes(field));
  
    setMatchingUniversitiesByInterest(getUniversities(interestFields, universityData, scores));
    setMatchingUniversitiesByStrength(getUniversities(strengthFields, universityData, scores));
    setMatchingUniversitiesByCommon(getUniversities(commonFields, universityData, scores));
    setShowResults(true);
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
          <div className="pt-6 space-y-6">
            {[matchingUniversitiesByInterest, matchingUniversitiesByStrength, matchingUniversitiesByCommon].map((universities, idx) => (
              <div key={idx} className="p-4 bg-gray-100 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800">
                  {idx === 0 ? "Ngành học liên quan đến sở thích:" : idx === 1 ? "Ngành học liên quan đến sở trường:" : "Ngành học liên quan giữa sở thích và sở trường:"}
                </h3>
                {universities.length > 0 ? (
                  <ul className="list-disc list-inside text-gray-700 mt-2">
                    {universities.map((uni, index) => (
                      <li key={index} className="ml-4">
                        <strong>{uni.Trường}</strong> - {uni["Nhóm ngành"]} - {uni["Ngành"]} - {uni["Mã ngành"]} - {uni["Tổ hợp môn"]} - {uni["Điểm chuẩn 2024"]}
                        <div className="mt-1 text-sm text-gray-600">
                          {uni["Điểm theo tổ hợp"].map((exam, i) => (
                            <div key={i}><strong>{exam.group}:</strong> {exam.score}</div>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  idx === 2 && <p className="text-gray-700 mt-2">Không có ngành nào liên quan giữa sở thích và sở trường</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendationTab;