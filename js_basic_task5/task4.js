// Напишіть функцію, яка приймає 3 параметри-оцінки: математика, література, фізика. Кожен від 1 до 100.

// В функції порахуйте середній бал і поверніть(return) наступний рядок в залежності від середнього балу:

function AverageGrade (MathGrade, LitGrade, PhisGrade) {
    if (MathGrade < 1 || MathGrade > 100 || LitGrade < 1 || LitGrade > 100 || PhisGrade < 1 || PhisGrade > 100) {
        return "Invalid grades. Grades should be between 1 and 100.";
    }
    let averageGrade = Math.round((MathGrade + LitGrade + PhisGrade) / 3)
    if (averageGrade <= 49) {
        return `Your grade is ${averageGrade}. Low Performance`
    }
    else if (averageGrade <= 69){
        return `Your grade is ${averageGrade}. Medium Performance`
    }
    else if (averageGrade <= 89){
        return `Your grade is ${averageGrade}. Good Performance`
    } else if (averageGrade <= 100){
        return `Your grade is ${averageGrade}. Very Good Performance`
    }
        else {
            throw new Error ('Invalid grade') } 
    }

    console.log(AverageGrade(1,1,1))