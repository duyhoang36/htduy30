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
            question: "Câu hỏi 11: Cáp UTP Cat 5 có bao nhiêu đôi cáp:",
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
            choices: ["A. Thiết lập liên kết vật lý, truyền dữ liệu và giải phóng liên kết giữa 2 thực thể", "B. Thiết lập liên kết logic, truyền dữ liệu và giải phóng liên kết giữa 2 thực thể", "C. Truyền dữ liệu giữa 2 thực thể", "D. Thiết lập liên kết và giải phóng liên kết giữa 2 thực thể"],
            correctAnswer: 0
        },
        {
            question: "Câu hỏi 17: Khẳng định nào sau đây là đúng khi nói về mạng chuyển mạch gói:",
            choices: ["A. Gói tin lưu chuyển trên các kết nối logic", "B. Gói tin lưu chuyển trên các kết nối vật lý", "C. Gói tin lưu chuyển độc lập hướng đích", "D. Gói tin lưu chuyển trên các kết nối logic hướng đích và trên một đường có thể có nhiều gói tin cùng lưu chuyển"],
            correctAnswer: 3
        },
        {
            question: "Câu hỏi 18: Khẳng định nào sau đây là đúng khi nói về quá trình phân mảnh gói tin:",
            choices: ["A. Làm giảm thời gian xử lý", "B. Làm tăng tính linh hoạt của mạng", "C. Ảnh hưởng đến tốc độ trao đổi dữ liệu trong mạng", "D. Tăng tốc độ trao đổi thông tin trong mạng"],
            correctAnswer: 3
        },
        {
            question: "Câu hỏi 19: Khẳng định nào sau đây là đúng khi nói về truyền dữ liệu theo phương thức hướng liên kết:",
            choices: ["A. Có độ tin cậy cao, đảm bảo chất lượng dịch vụ và có xác nhận", "B. Không cần độ tin cậy cao, chất lượng dịch vụ thấp", "C. Có xác nhận, không kiểm soát lỗi, kiểm soát luồng", "D. Độ tin cậy cao, không xác nhận"],
            correctAnswer: 0
        },
        {
            question: "Câu hỏi 20: Khẳng định nào sau đây là đúng nói về cấu trúc vật lý của mạng:",
            choices: ["A. Giao thức mạng (Protocol)", "B. Hình trạng mạng (Topology )", "C. Phương tiện truyền", "D. Các dịch vụ mạng"],
            correctAnswer: 1
        },
        {
            question: "Câu hỏi 21: Mạng Internet là:",
            choices: ["A. Mạng của các máy tính toàn cầu kết nối lại với nhau theo giao thức TCP/IP", "B. Mạng diện rộng", "C. Mạng máy tính toàn cầu", "D. Mạng của các mạng con kết nối lại với nhau"],
            correctAnswer: 0
        },
        {
            question: "Câu hỏi 22: Trong mạng hình BUS, tất cả các trạm truy nhập ngẫu nhiên vào:",
            choices: ["A. Đường truyền chung", "B. Máy chủ mạng", "C. Bộ nhớ đệm", "D. Các thiết bị kết nối mạng"],
            correctAnswer: 0
        },
        {
            question: "Câu hỏi 23: Mạng LAN hình sao (STAR) khi có sự cố:",
            choices: ["A. Sẽ ngừng hoạt động toàn bộ hệ thống", "B. Không ảnh hưởng tới hoạt động toàn bộ hệ thống", "C. Chỉ ảnh hướng đến trạm có sự cố", "D. Chỉ ảnh hướng đến một phần của hệ thống"],
            correctAnswer: 2
        },
        {
            question: "Câu hỏi 24: Với kiểu kết nối mạng theo dạng hình sao (Star), khi một trạm trong mạng ngưng hoạt động thì các trạm còn lại:",
            choices: ["A. Hoạt động bình thường", "B. Đều ngưng hoạt động", "C. Hoạt động không ổn định", "D. Các câu trên đều sai"],
            correctAnswer: 0
        },
        {
            question: "Câu hỏi 25: Hình trạng mạng nào cho phép tất cả các cặp thiết bị đều có 1 đường nối vật lý trực tiếp:",
            choices: ["A. Star (dạng sao)", "B. Bus (dạng đường trục)", "C. Mesh (dạng lưới", "D. Hierarchical (dạng phân cấp)"],
            correctAnswer: 2
        },
        {
            question: "Câu hỏi 26: Về nguyên tắc cơ bản, dùng cáp UTP Cat5e nào sau đây để kết nối trực tiếp giữa 2 PC với nhau:",
            choices: ["A. Cáp thẳng", "B. Cáp chéo", "C. Cáp cuộn", "D. Cả 3 loại trên"],
            correctAnswer: 1
        },
        {
            question: "Câu hỏi 27: Kết quả nào sau đây không đúng:",
            choices: ["A. 163 chuyển sang nhị phân sẽ có giá trị là: 10100011", "B. 111 chuyển sang nhị phân sẽ có giá trị là : 01110011", "C. 125 chuyển sang nhị phân sẽ có giá trị là : 01111101", "D. 178 chuyển sang nhị phân sẽ có giá trị là : 10110010"],
            correctAnswer: 1
        },
        {
            question: "Câu hỏi 28: Kiểu mạng nào được hạn chế ở cấp tòa cao ốc hay một công sở:",
            choices: ["A. GAN", "B. WAN", "C. MAN", "D. LAN"],
            correctAnswer: 3
        },
        {
            question: "Câu hỏi 29: Chiều dài tối đa của một đoạn trong kiến trúc 100Base-TX:",
            choices: ["A. 3 km", "B. 100 mét", "C. 550 mét", "D. 25 mét"],
            correctAnswer: 1
        },
        {
            question: "Câu hỏi 30: Xét về tỷ lệ lỗi trên đường truyền dữ liệu thì loại mạng nào cao nhất:",
            choices: ["A. MAN", "A. MAN", "C. Internet", "D. LAN"],
            correctAnswer: 1
        },
        {
            question: "Câu hỏi 31: Độ dài tối đa cho phép khi sử dụng dây cáp mạng UTP là bao nhiêu mét:",
            choices: ["A. 100", "B. 200", "C. 35", "D. 400"],
            correctAnswer: 0
        },
        {
            question: "Câu hỏi 32: Quá trình dữ liệu di chuyển từ hệ thống máy tính này sang hệ thống máy tính khác phải trải qua giai đoạn nào:",
            choices: ["A. Phân tích dữ liệu", "B. Lọc dữ liệu", "C. Đóng gói dữ liệu", "D. Kiểm thử dữ liệu"],
            correctAnswer: 2
        },
        {
            question: "Câu hỏi 33: Khi nối mạng giữa 2 máy tính, thường sử dụng loại cáp nào để nối trực tiếp giữa chúng:",
            choices: ["A. Cáp quang", "B. Cáp UTP thẳng", "C. Cáp STP", "D. Cáp UTP chéo"],
            correctAnswer: 3
        },
        {
            question: "Câu hỏi 34: Các quy tắc điều quản việc truyền thông máy tính được gọi là:",
            choices: ["A. Các giao thức", "B. Các dịch vụ", "C. Các hệ điều hành mạng", "D. Các thiết bị mang tải"],
            correctAnswer: 0
        },
        {
            question: "Câu hỏi 35: Hai kiểu máy tính khác nhau có thể truyền thông nếu:",
            choices: ["A. Chúng cài đặt cùng hệ điều hành mạng", "B. Chúng tuân thủ theo mô hình OSI", "C. Chúng cùng dùng giao thức TCP/IP", "D. Chúng có phần cứng giống nhau"],
            correctAnswer: 1
        },
        {
            question: "Câu hỏi 36: Để kết nối hai máy tính với nhau ta có thể sử dụng:",
            choices: ["A. Hub", "B. Switch", "C. Nối cáp trực tiếp", "D. Tất cả đều đúng"],
            correctAnswer: 3
        },
        {
            question: "Câu hỏi 37: Biễu diễn số 125 từ cơ số decimal sang cơ số binary:",
            choices: ["A. 01111101", "B. 01101111", "C. 01011111", "D. 1111101"],
            correctAnswer: 0
        },
        {
            question: "Câu hỏi 38: Số nhị phân nào dưới đây có giá trị là 164:",
            choices: ["A. 10100100", "B. 10010010", "C. 11000100", "D. 10101010"],
            correctAnswer: 0
        },
        {
            question: "Câu hỏi 39: Thiết bị nào hoạt động ở tầng Vật lý:",
            choices: ["A. Switch", "B. Card mạng", "C. Hub và repeater", "D. Router"],
            correctAnswer: 2
        },
        {
            question: "Câu hỏi 40: Môi trường truyền tin thông thuờng trong mạng máy tính là:",
            choices: ["A. Các loại cáp như: UTP, STP, cáp điện thoại, cáp quang,...", "B. Sóng hồng ngoại", "C. Tất cả môi trườngng nêu trên", "D. Không cái gì đúng"],
            correctAnswer: 0
        },
        // Thêm các câu hỏi khác tương tự
    ];

    let currentQuestionIndex = 0;
    let correctAnswers = 0;
    let timeLimit = 3003000; // Thời gian là 50 phút

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
