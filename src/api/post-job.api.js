
const postRequestOptions ={
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        "company_email": "test@test.com",
        "company_logo": "https://ucarecdn.com/3ec2e65c-b1a5-4961-8dbd-c921572e4a95/",
        "company_name": "Google",
        "created_at": "2022-10-22T17:52:44.882011+02:00",
        "description": "<h1>test</h1><p>test</p>&lt;div&gt;test&lt;/div&gt;",
        "id": 4,
        "location": "USA",
        "salary": "80 - 150k",
        "title": "Software Engineer",
        "type": 1,
        "vacancy": 3
    })
}

const postJob = async () => {
    const response = await fetch("https://gdsc-job-app.herokuapp.com/api/jobs", postRequestOptions);
    const data = await response.json()
    console.log(data.data)
    console.log('Done')

}
/*
    [ logo,  description, location, salary, title, type, vacancy ]
    [ email, company_name, created_at, id ]
*/

/*
    1- click 'Post A Job' button
    2- tak email and company name in popup form
    3- click continue button and redirect to post page
    4- tak other information
    5- click save and post button => make post request & update setJobs state
    6- redirect to home page

*/



export default postJob