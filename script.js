document.addEventListener('DOMContentLoaded', function() {
    const examPage = document.getElementById('exam-page');
    const resultPage = document.getElementById('result-page');
    const submitExamBtn = document.getElementById('submit-exam-btn');
    const timeLeft = document.getElementById('time-left');
    const questionContainer = document.getElementById('question-container');
    const answersContainer = document.getElementById('answers-container');
    const correctAnswersSpan = document.getElementById('correct-answers');
    const totalQuestionsSpan = document.getElementById('total-questions');
    const examGradeSpan = document.getElementById('exam-grade');

    // Giả định dữ liệu bài thi
    const examData = [
        {
            question: "Câu hỏi 1: Các mạng máy tính được thiết kế và cài đặt theo quan điểm:",
            choices: ["A. Có cấu trúc đa tầng", "B. Nhiều tầng", "C. Theo lớp", "D. Tập hợp"],
            correctAnswer: 0
        },
        {
            question: "Câu hỏi 2: Khi sử dụng mạng máy tính ta sẽ thu được các lợi ích:",
            choices: ["A. Chia sẻ tài nguyên (ổ cứng, cơ sở dữ liệu, máy in, các phần mềm tiện ích...)", "B. Quản lý tập trung", "C. Tận dụng năng lực xử lý của các máy tính rỗi kết hợp lại để thực hiện các công việc lớn", "D. Tất cả đều đúngD"],
            correctAnswer: 3
        },
        {
            question: "Câu hỏi 3: Đơn vị cơ bản đo tốc độ truyền dữ liệu là:",
            choices: ["A. Bit", "B. Byte", "C. Bps (bit per second)", "D. Hz"],
            correctAnswer: 2
        },
        {
            question: "Câu hỏi 4: Quá trình dữ liệu di chuyển từ hệ thống máy tính này sang hệ thống máy tính khác phải trải qua giai đoạn nào:",
            choices: ["A. Phân tích dữ liệu", "B. Nén dữ liệu", "C. Đóng gói", "D. Lọc dữ liệu"],
            correctAnswer: 2
        },
        {
            question: "Câu hỏi 5: Kết nối mạng sử dụng các giao thức khác nhau bằng các:",
            choices: ["A. Bộ chuyển tiếp", "B. Cổng giao tiếp", "C. SONET", "D. Bộ định tuyến"],
            correctAnswer: 3
        },
        {
            question: "Câu hỏi 6: Nhược điểm của mạng dạng hình sao (Star) là:",
            choices: ["A. Khó cài đặt và bảo trì", "B. Khó khắc phục khi lỗi cáp xảy ra, và ảnh hưởng tới các nút mạng khác", "C. Cần quá nhiều cáp để kết nối tới nút mạng trung tâm", "D. Không có khả năng thay đổi khi đã lắp đặt"],
            correctAnswer: 2
        },
        {
            question: "Câu hỏi 7: Đặc điểm của mạng dạng Bus:",
            choices: ["A. Tất cả các nút mạng kết nối vào nút mạng trung tâm (ví dụ như Hub)", "B. Tất cả các nút kết nối trên cùng một đường truyền vật lý", "C. Tất cả các nút mạng đều kết nối trực tiếp với nhau", "D. Mỗi nút mạng kết nối với 2 nút mạng còn lại"],
            correctAnswer: 1
        },
        {
            question: "Câu hỏi 8: Trong kỹ thuật chuyển mạch kênh, trước khi trao đổi thông tin, hệ thống sẽ thiết lập kết nối giữa 2 thực thể bằng một:",
            choices: ["A. Đường truyền vật lý", "B. Kết nối ảo", "C. Đường ảo", "D. Đường truyền logic"],
            correctAnswer: 0
        },
        {
            question: "Câu hỏi 9: Kết nối liên mạng các mạng LAN, WAN, MAN độc lập với nhau bằng các thiết bị có chức năng:",
            choices: ["A. Kiểm soát lỗi, kiểm soát luồng", "B. Định tuyến", "C. Điều khiển liên kế", "D. Điều khiển lưu lượng và đồng bộ hoá"],
            correctAnswer: 1
        },
        {
            question: "Câu hỏi 10: Cáp UTP Cat5e sử dụng đầu nối:",
            choices: ["A. RJ - 58", "B. BNC", "C. RJ - 45", "D. ST"],
            correctAnswer: 2
        },
        {
        /*    question: "Câu hỏi 11: Cáp UTP Cat 5 có bao nhiêu đôi cáp:",
            choices: ["A. 2", "B. 4", "C. 6", "D. 8"],
            correctAnswer: 1
        },
        {
            question: "Câu hỏi 12: Đặc điểm quan trọng của kiến trúc mạng client/server (khách/chủ):",
            choices: ["A. Client/server là kiến trúc phân cấp, client đóng vai trò yêu cầu và server đáp ứng lại các yêu cầu đó.", "B. Server là host luôn hoạt động, thường có IP cố định, có nhóm các server để chia sẻ công việc. Client có kết nối không liên tục, địa chỉ IP có thể thay đổi, truyền thông với server và thường không truyền thông trực tiếp với client khác.", "C. Câu A và B đều đúng", "D. Câu A và B đều sai"],
            correctAnswer: 2
        },
        {
            question: "Câu hỏi 13: Khẳng định nào sau đây là đúng khi nói về mạng có cấu trúc điểm- điểm:",
            choices: ["A. Mạng quảng bá", "B. Nối từng cặp node lại với nhau theo một hình học xác định", "C. Mạng lưu và chuyển tiếp (Store - and - Forward)", "D. Các node trung gian: tiếp nhận, lưu trữ tạm thời và gửi tiếp thông tin"],
            correctAnswer: 2
        },
        {
            question: "Câu hỏi 14: Khẳng định nào sau đây là đúng khi nói về nhược điểm của mạng có cấu trúc điểm-điểm:",
            choices: ["A. Khả năng đụng độ thông tin (collision) thấp", "B. Hiệu suất sử dụng đường truyền thấp, chiếm dụng nhiều tài nguyên", "C. Độ trễ lớn, tốn nhiều thời gian để thiết lập đường truyền và xử lý tại các node", "D. Tốc độ trao đổi thông tin thấp"],
            correctAnswer: 1
        },
        {
            question: "Câu hỏi 15: Khẳng định nào sau đây là đúng khi nói về đặc trưng của mạng quảng bá:",
            choices: ["A. Tất cả các node cùng truy nhập chung trên một đường truyền vật lý", "B. Nối từng cặp node lại với nhau theo một hình học xác định", "C. Các node trung gian: tiếp nhận, lưu trữ tạm thời và gửi tiếp thông tin", "D. Khả năng đụng độ thông tin (collision) thấp"],
            correctAnswer: 0
        },
        {
            question: "Câu hỏi 16: Khẳng định nào sau đây là đúng khi nói về mạng chuyển mạch kênh:",
            choices: ["A. Thiết lập liên kết vật lý, truyền dữ liệu và giải phóng liên kết giữa 2 thực thể", "B. Thiết lập liên kết logic, truyền dữ liệu v10; // Thời gian là 50 phút

    function displayQuestion() {
        const currentQuestion = examData[currentQuestionIndex];
        const questionHTML = `
            <p>${currentQuestion.question}</p>
            <ul>
                ${currentQuestion.choices.map((choice, index) => `
                    <li><input type="radio" name="choice" value="${index}">${choice}</li>
                `).join('')}
            </ul>
        `;
        questionContainer.innerHTML = questionHTML;
    }

    function displayResult() {
        examPage.style.display = 'none';
        resultPage.style.display = 'block';
        correctAnswersSpan.textContent = correctAnswers;
        totalQuestionsSpan.textContent = examData.length;
        const grade = (correctAnswers / examData.length) * 10;
        examGradeSpan.textContent = grade.toFixed(2);
        // Hiển thị câu trả lời và đáp án đúng
        examData.forEach((question, index) => {
            const userChoice = document.querySelector(`input[name="choice"]:checked`).value;
            const answerHTML = `
                <p><strong>Câu hỏi ${index + 1}:</strong> ${question.question}</p>
                <p><strong>Câu trả lời của bạn:</strong> ${question.choices[userChoice]}</p>
                <p><strong>Đáp án đúng:</strong> ${question.choices[question.correctAnswer]}</p>
            `;
            answersContainer.innerHTML += answerHTML;
        });
        if (timeLimit < 0) {
            alert('Hết giờ làm bài!');
        }
    }

    function startTimer() {
        const timerInterval = setInterval(() => {
            timeLimit--;
            if (timeLimit < 0) {
                clearInterval(timerInterval);
                displayResult();
            } else {
                const minutes = Math.floor(timeLimit / 60);
                const seconds = timeLimit % 60;
                timeLeft.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            }
        }, 1000);
    }

    displayQuestion();
    startTimer();

    submitExamBtn.addEventListener('click', function() {
        const userChoice = document.querySelector(`input[name="choice"]:checked`);
        if (userChoice !== null) {
            if (parseInt(userChoice.value) === examData[currentQuestionIndex].correctAnswer) {
                correctAnswers++;
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < examData.length) {
                displayQuestion();
            } else {
                displayResult();
            }
        } else {
            alert('Vui lòng chọn một câu trả lời!');
        }
    });
});
