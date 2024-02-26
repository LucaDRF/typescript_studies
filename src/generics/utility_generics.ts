interface CourseGoal {
    title: string,
    description: string,
    completeUntil: Date
}

function BuildCourse(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    // make all properties in T optional
    const courseGoal: Partial<CourseGoal> = {};

    courseGoal.title = title;
    courseGoal.description = description;
    // courseGoal.completeUntil = date;

    // must return as the interface CourseGoal
    return courseGoal as CourseGoal;
}

// make all properties in T readonly
const names: Readonly<string[]> = ['Luca', 'Bella'];
// names.push('Fabio');

// https://www.typescriptlang.org/docs/handbook/utility-types.html
// typescript\lib\lib.es5.d.ts
