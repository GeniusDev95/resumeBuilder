document.getElementById('createResume').addEventListener('click', function() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const careerObjective = document.getElementById('careerObjective').value;
    const degree = document.getElementById('degree').value;
    const institution = document.getElementById('institution').value;
    const year = document.getElementById('year').value;
    const grade = document.getElementById('grade').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const companyName = document.getElementById('companyName').value;
    const duration = document.getElementById('duration').value;
    const jobDescription = document.getElementById('jobDescription').value;
    const skills = document.getElementById('skills').value;

    let resumeContent = `
        <h2>${fullName}</h2>
        <p>${address} | ${phone} | ${email}</p>
        <hr>
        
        <h4>Career Objective</h4>
        <p>${careerObjective}</p>
        <hr>
        <h4>Education</h4>
        <p><strong>${degree}</strong> | ${institution} | (${year}) | ${grade}</p>
        <hr>
        <h4>Work Experience</h4>
        <p><strong>${jobTitle}</strong> | ${companyName} |(${duration})</p>
        <p>${jobDescription}</p>
        
        <h4>Skills</h4>
        <p>${skills}</p>
    `;

    document.getElementById('resumeContent').innerHTML = resumeContent;
    document.getElementById('resumePreview').style.display = 'block';
});

