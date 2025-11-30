from flask import Flask, render_template, request
import datetime

app = Flask(__name__)

# ข้อมูลครบรอบ
start_date = datetime.date(2567, 1, 1)  # เปลี่ยนเป็นวันที่เริ่มต้นของคุณ
current_date = datetime.date.today()

@app.route('/')
def index():
    return render_template('index.html', 
                          start_date=start_date.strftime("%d/%m/%Y"))

if __name__ == '__main__':
    app.run(debug=True)