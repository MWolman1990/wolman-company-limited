import blogs from '../blogs/blogs'

function getBlog(params) {
    return blogs[params]
}

export default getBlog