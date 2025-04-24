from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from transformers import AutoTokenizer, AutoModelForCausalLM
from peft import PeftModel
import torch

app = FastAPI()

# Cho phép truy cập từ frontend React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Kiểm tra nếu CUDA có sẵn và chọn thiết bị tương ứng (GPU nếu có, CPU nếu không)
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# Load model và adapter
model_path = "./models/gpt-neo-1.3B"  # <- model local bạn đã tải
adapter_path = "./models/gpt-neo-1.3B/adapter"  # <- giữ nguyên adapter bạn đang dùng

tokenizer = AutoTokenizer.from_pretrained(model_path)
model = AutoModelForCausalLM.from_pretrained(model_path)

# Load adapter LoRA đã fine-tune
model = PeftModel.from_pretrained(model, adapter_path)

# Chuyển mô hình sang GPU nếu có
model.to(device)

model.eval()

@app.post("/chat")
async def chat(request: Request):
    data = await request.json()
    user_input = data.get("message")

    def generate_response(prompt, model, tokenizer, max_length=150):
      input_text = f"Người dùng: {prompt}"
      input_ids = tokenizer.encode(input_text, return_tensors="pt").to(device)

      with torch.no_grad():
          pad_token_id = tokenizer.eos_token_id if tokenizer.eos_token_id is not None else tokenizer.pad_token_id
          output = model.generate(
              input_ids,
              max_length=max_length,
              temperature=0.7,
              top_p=0.9,
              pad_token_id=pad_token_id
          )

      response = tokenizer.decode(output[0], skip_special_tokens=True)
      if "Chatbot:" in response:
          response = response.split("Chatbot:")[1].strip()
      else:
          response = response.strip()
      return response

    # Giải mã kết quả và chuyển về CPU trước khi trả về kết quả
    response = generate_response(user_input, model, tokenizer)
    return {"response": response}
