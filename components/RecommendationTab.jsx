import { useState } from "react";
import { Button, Card, CardBody } from "@nextui-org/react";
import interestsData from "../data/interestsData"; 
import skillsData from "../data/skillsData";
import schoolsData from "../data/schoolsData";

const RecommendationTab = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState("");

  const toggleSelection = (item, state, setState) => {
    if (state.includes(item)) {
      setState(state.filter((i) => i !== item));
    } else {
      setState([...state, item]);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 py-10 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Gợi ý học tập phù hợp</h2>
      <p className="text-gray-600 mb-10 text-center max-w-xl">
        Chọn các sở thích, sở trường và trường học để chúng tôi gợi ý lộ trình học tập phù hợp nhất cho bạn.
      </p>

      {/* Sở thích */}
      <Card className="mb-6 w-full max-w-4xl">
        <CardBody>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Sở thích</h3>
          <div className="grid grid-cols-3 gap-4">
            {interestsData.map((interest, index) => (
              <Button
                key={index}
                size="sm"
                className={`${
                  selectedInterests.includes(interest)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                } rounded-full`}
                onClick={() =>
                  toggleSelection(interest, selectedInterests, setSelectedInterests)
                }
              >
                {interest}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>

      {/* Sở trường */}
      <Card className="mb-6 w-full max-w-4xl">
        <CardBody>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Sở trường</h3>
          <div className="grid grid-cols-3 gap-4">
            {skillsData.map((skill, index) => (
              <Button
                key={index}
                size="sm"
                className={`${
                  selectedSkills.includes(skill)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                } rounded-full`}
                onClick={() => toggleSelection(skill, selectedSkills, setSelectedSkills)}
              >
                {skill}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>

      {/* Trường học yêu thích */}
      <Card className="mb-10 w-full max-w-4xl">
        <CardBody>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Trường học yêu thích</h3>
          <div>
            <select
              className="w-full p-2 border rounded-md text-gray-800"
              value={selectedSchool}
              onChange={(e) => setSelectedSchool(e.target.value)}
            >
              <option value="">-- Chọn trường --</option>
              {schoolsData.map((school, index) => (
                <option key={index} value={school}>
                  {school}
                </option>
              ))}
            </select>
          </div>
        </CardBody>
      </Card>

      {/* Nút Nhận Gợi Ý */}
      <Button
        className="bg-blue-500 text-white px-10 py-3 rounded-lg hover:bg-blue-600"
        onClick={() => {
          console.log("Sở thích:", selectedInterests);
          console.log("Sở trường:", selectedSkills);
          console.log("Trường học:", selectedSchool);
        }}
      >
        Nhận gợi ý
      </Button>
    </div>
  );
};

export default RecommendationTab;
