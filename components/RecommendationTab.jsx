import React, { useState } from 'react';
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/select";
import interestsData from "../data/interestsData";
import skillsData from "../data/skillsData";

const RecommendationTab = () => {
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
      selectedInterests,
      selectedStrengths,
      scores
    });
  // Xử lý logic gợi ý ở đây
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