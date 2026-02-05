<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Second Conditional - Discussion Starters</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
        
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            overflow: hidden;
        }

        .glass-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 24px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
            width: 90%;
            max-width: 600px;
            padding: 3rem;
            text-align: center;
            transition: transform 0.3s ease;
        }

        .question-box {
            min-height: 180px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 2rem;
        }

        #question-text {
            font-size: 1.75rem;
            font-weight: 600;
            color: #1a202c;
            line-height: 1.4;
            opacity: 1;
            transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .fade-out {
            opacity: 0 !important;
            transform: translateY(-10px);
        }

        .fade-in {
            opacity: 0;
            transform: translateY(10px);
        }

        .btn-generate {
            background: #4f46e5;
            color: white;
            padding: 1rem 2.5rem;
            border-radius: 9999px;
            font-weight: 600;
            font-size: 1.125rem;
            border: none;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0 4px 14px rgba(79, 70, 229, 0.4);
        }

        .btn-generate:hover {
            background: #4338ca;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(79, 70, 229, 0.5);
        }

        .btn-generate:active {
            transform: translateY(0);
        }

        .badge {
            display: inline-block;
            background: #e0e7ff;
            color: #4338ca;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 1rem;
        }
    </style>
</head>
<body>

    <div class="glass-card">
        <span class="badge">English Practice</span>
        <h1 class="text-gray-500 text-sm mb-8 font-medium italic">"Second Conditional"</h1>
        
        <div class="question-box">
            <p id="question-text">Click the button to start the discussion!</p>
        </div>

        <button id="generate-btn" class="btn-generate">
            New Question
        </button>
    </div>

    <script>
        const questions = [
            "If you could go on vacation anywhere in the world, where would you go and why?",
            "If you could be an expert in one thing, what would it be?",
            "What would you do if you could control the weather?",
            "If you could meet any historical figure, who would it be and what would you ask them?",
            "What would you do if you were offered your dream job, but you had to move to another country to do it?",
            "What would you do if you woke up one day and everyone had disappeared?",
            "If you could have any superpower, what would it be and how would you use it?",
            "If you could be any fictional character, who would you be and why?",
            "What would you do if you were the leader of your country for a day?",
            "If it were possible to change your appearance instantly, would you change anything about yourself?",
            "If you could have a conversation with your past self, what advice would you give yourself?",
            "If you could have any type of pet, what would you choose and why?",
            "What would you do if you could solve one world problem overnight?",
            "If you could switch lives with someone for a day, who would you choose and why?",
            "What would happen if all social media platforms were suddenly shut down?",
            "What would happen if all forms of mechanical transportation disappeared overnight?"
        ];

        const textEl = document.getElementById('question-text');
        const btn = document.getElementById('generate-btn');
        let lastIndex = -1;

        function getRandomQuestion() {
            let newIndex;
            // Prevent getting the same question twice in a row
            do {
                newIndex = Math.floor(Math.random() * questions.length);
            } while (newIndex === lastIndex);
            
            lastIndex = newIndex;
            return questions[newIndex];
        }

        function updateQuestion() {
            // Animation sequence
            textEl.classList.add('fade-out');
            
            setTimeout(() => {
                textEl.innerText = getRandomQuestion();
                textEl.classList.remove('fade-out');
                textEl.classList.add('fade-in');
                
                // Allow a tiny delay for the browser to register the class swap
                requestAnimationFrame(() => {
                    textEl.classList.remove('fade-in');
                });
            }, 400);
        }

        btn.addEventListener('click', updateQuestion);
    </script>
</body>
</html>
