const questions = ["האם הבעיה מתרחשת באופן קבוע או אקראי?", "האם ניסית פתרון כלשהו עד כה?", "האם יש סיכון פיזי מיידי בשימוש בפתרון הנוכחי?", "מהי התוצאה האידיאלית מבחינתך?", "האם יש מגבלת תקציב או משאבים?"];
let currentStep = 0;
const state1 = document.getElementById('state-1'), state2 = document.getElementById('state-2'), state3 = document.getElementById('state-3');

document.getElementById('start-btn').onclick = () => { state1.classList.add('hidden'); state2.classList.remove('hidden'); askQuestion(); };

function askQuestion() {
    if (currentStep < questions.length) {
        const div = document.createElement('div');
        div.innerHTML = `<p><strong>מערכת:</strong> ${questions[currentStep]}</p>`;
        const history = document.getElementById('chat-history');
        history.innerHTML = ''; 
        history.appendChild(div);
    } else { generateSolution(); }
}

document.getElementById('submit-answer').onclick = () => { 
    currentStep++; 
    askQuestion(); 
};
document.getElementById('stop-btn').onclick = generateSolution;

function generateSolution() {
    state2.classList.add('hidden'); 
    state3.classList.remove('hidden');
    const sol = { title: "מערכת ייצוב אלקטרונית חכמה", desc: "הפתרון הנוכחי מסוכן עקב חשיפה למתח גבוה. הפתרון החדש כולל מפסק פחת חכם המנתק זרם תוך מילי-שנייה.", steps: ["ניתוק מקור חשמל", "התקנת המייצב", "בדיקת עומסים"] };
    document.getElementById('sol-title').innerText = sol.title;
    document.getElementById('sol-desc').innerText = sol.desc;
    const stepsDiv = document.getElementById('sol-steps');
    stepsDiv.innerHTML = '';
    sol.steps.forEach(s => stepsDiv.innerHTML += `<p>• ${s}</p>`);
}

document.getElementById('download-btn').onclick = () => {
    const element = document.getElementById('solution-container');
    html2pdf().set({ margin: 1, filename: 'solution.pdf' }).from(element).save();
};