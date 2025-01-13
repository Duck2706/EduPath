import React, { useState } from 'react';
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/select";
import {Checkbox} from "@nextui-org/checkbox";
import interestsData from "../data/interestsData";
import skillsData from "../data/skillsData";
import schoolsData from "../data/schoolsData";

const RecommendationTab = () => {
  // State cho các trường, sở thích và sở trường (cho phép chọn nhiều)
  const [selectedSchools, setSelectedSchools] = useState({
    "Miền Bắc": [],
    "Miền Trung - Tây Nguyên": [],
    "Miền Nam": [],
    "Quân đội - Công an": []
  });
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedStrengths, setSelectedStrengths] = useState([]);
  
  const [scores, setScores] = useState({
    literature: "",
    math: "",
    english: "",
    physics: "",
    chemistry: "",
    biology: "",
    history: "",
    geography: "",
    civics: ""
  });
  const [hasFoundSchool, setHasFoundSchool] = useState(false);
  const [hasNotFoundSchool, setHasNotFoundSchool] = useState(false);

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
    console.log({
      selectedSchools,
      selectedInterests,
      selectedStrengths,
      scores
    });
    // Xử lý logic gợi ý ở đây
  };

  // Xử lý thay đổi checkbox "Đã tìm ra trường muốn theo học"
  const handleFoundSchoolChange = (checked) => {
    setHasFoundSchool(checked);
    if (checked) {
      setHasNotFoundSchool(false);
      setSelectedSchools({
        "Miền Bắc": [],
        "Miền Trung - Tây Nguyên": [],
        "Miền Nam": [],
        "Quân đội - Công an": []
      });
    }
  };

  // Xử lý thay đổi checkbox "Chưa tìm ra trường muốn theo học"
  const handleNotFoundSchoolChange = (e) => {
    const checked = e.target.checked;
    setHasNotFoundSchool(checked);
    if (checked) {
      setHasFoundSchool(false);
      // Reset toàn bộ các trường đã chọn khi chọn "Chưa tìm ra"
      setSelectedSchools({
        "Miền Bắc": [],
        "Miền Trung - Tây Nguyên": [],
        "Miền Nam": [],
        "Quân đội - Công an": []
      });
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 bg-white shadow-lg rounded-lg">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Chọn trường mong muốn */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Chọn trường mong muốn</h2>
          <div className="flex items-center space-x-6">
            <label className="flex items-center space-x-2">
            <Checkbox
              isSelected={hasFoundSchool}
              onChange={(checked) => handleFoundSchoolChange(checked)}
              color="primary"
            >
              <span className="text-gray-700">Đã tìm ra trường muốn theo học</span>
            </Checkbox>
            </label>
            <label className="flex items-center space-x-2">
            <Checkbox
              isSelected={hasNotFoundSchool}
              onChange={(checked) => handleNotFoundSchoolChange(checked)}
              color="primary"
            >
              <span className="text-gray-700">Chưa tìm ra trường muốn theo học</span>
            </Checkbox>
            </label>
          </div>

          {hasFoundSchool && (
            <div className="flex flex-wrap gap-6 justify-start">
              {/* Trường đại học miền Bắc */}
              <Select
                label="Trường Đại học tại miền Bắc"
                placeholder="Chọn trường ở miền Bắc"
                selectionMode="multiple"
                className="flex-1 min-w-[250px]"
                value={selectedSchools["Miền Bắc"]}
                onChange={(selected) => setSelectedSchools(prev => ({
                  ...prev,
                  "Miền Bắc": selected
                }))}
              >
                {schoolsData["Miền Bắc"].map((uni) => (
                  <SelectItem key={uni} value={uni}>
                    {uni}
                  </SelectItem>
                ))}
              </Select>

              {/* Trường đại học miền Trung - Tây Nguyên */}
              <Select
                label="Trường Đại học tại miền Trung - Tây Nguyên"
                placeholder="Chọn trường ở miền Trung - Tây Nguyên"
                selectionMode="multiple"
                className="flex-1 min-w-[250px]"
                value={selectedSchools["Miền Trung - Tây Nguyên"]}
                onChange={(selected) => setSelectedSchools(prev => ({
                  ...prev,
                  "Miền Trung - Tây Nguyên": selected
                }))}
              >
                {schoolsData["Miền Trung"].map((uni) => (
                  <SelectItem key={uni} value={uni}>
                    {uni}
                  </SelectItem>
                ))}
              </Select>

              {/* Trường đại học miền Nam */}
              <Select
                label="Trường Đại học tại miền Nam"
                placeholder="Chọn trường ở miền Nam"
                selectionMode="multiple"
                className="flex-1 min-w-[250px]"
                value={selectedSchools["Miền Nam"]}
                onChange={(selected) => setSelectedSchools(prev => ({
                  ...prev,
                  "Miền Nam": selected
                }))}
              >
                {schoolsData["Miền Nam"].map((uni) => (
                  <SelectItem key={uni} value={uni}>
                    {uni}
                  </SelectItem>
                ))}
              </Select>

              {/* Quân đội - Công an */}
              <Select
                label="Quân đội - Công an"
                placeholder="Chọn quân đội - Công an"
                selectionMode="multiple"
                className="flex-1 min-w-[250px]"
                value={selectedSchools["Quân đội - Công an"]}
                onChange={(selected) => setSelectedSchools(prev => ({
                  ...prev,
                  "Quân đội - Công an": selected
                }))}
              >
                {schoolsData["Quân đội - Công an"].map((uni) => (
                  <SelectItem key={uni} value={uni}>
                    {uni}
                  </SelectItem>
                ))}
              </Select>
            </div>
          )}
        </div>

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
                value={selectedInterests}
                onChange={(selected) => setSelectedInterests(selected)}
              >
                {interestsData.map((interest) => (
                  <SelectItem key={interest} value={interest}>
                    {interest}
                  </SelectItem>
                ))}
              </Select>

              {/* Sở trường cá nhân */}
              <Select
                label="Sở trường cá nhân"
                placeholder="Chọn sở trường"
                selectionMode="multiple"
                className="flex-1 min-w-[250px]"
                value={selectedStrengths}
                onChange={(selected) => setSelectedStrengths(selected)}
              >
                {skillsData.map((strength) => (
                  <SelectItem key={strength} value={strength}>
                    {strength}
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
              label="GDCD"
              placeholder="0-10"
              value={scores.civics}
              onChange={(e) => handleScoreChange('civics', e.target.value)}
              className="w-full"
            />
          </div>
        </div>

        {/* Nút nhận gợi ý */}
        <div className="pt-4">
          <Button 
            color="primary"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
            onClick={handleSubmit}
          >
            Nhận gợi ý
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecommendationTab;