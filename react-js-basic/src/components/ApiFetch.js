import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ApiFetch = () => {
    const [posts, setPosts] = useState([])
    const [id, setId] = useState(1)
    const [clicked, setClicked] = useState(false)

    const handlerClicked = () => {
        setClicked(!clicked)
    }

    useEffect(() => {
        //axios.get("https://jsonplaceholder.typicode.com/posts")
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            setPosts(res.data)
        })
    }, [clicked]) // 1回だけ

    return (
        <div>
            <input type='text' value={id} onChange={evt=>setId(evt.target.value)} />
            <br />
            <button type='button' onClick={handlerClicked}>Get post</button>
            <br />
            {posts.title}
            {/*<ul>
                {
                    posts.map(post => <li key={post.id}> {post.title} </li>)
                }
            </ul>*/}
        </div>
    )
}

export default ApiFetch
