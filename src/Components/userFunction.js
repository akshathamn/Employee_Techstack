import axios from 'axios'

export const employ = user => {
    return axios
        .post('employee', {
            name: user.name,
            place: user.place,
            designation: user.designation
        })
        .then(res => {
            console.log('employee')
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const tech = user => {
    return axios
        .post('techstack', {
            technologies: user.technologies,
            experience: user.experience,
            project: user.project
        })
        .then(res => {
            console.log('techstack')
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}