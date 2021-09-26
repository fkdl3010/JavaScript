const person = {
    name: 'gil',
    age: 27,
    job: {
        title: 'dev',
    },
};

// Bad Code
function displayJobTitle(person) {
    if (person.job && person.job.title) {
        console.log(person.job.title);
    }
}

// Good Code
function displayJobTitleGood(person) {
    if (person.job?.title) {
        // job이 있다면 -> title이 있다면
        console.log(person.job.title);
    }
}

displayJobTitle(person);
displayJobTitleGood(person);
