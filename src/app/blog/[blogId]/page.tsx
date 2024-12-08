import React from 'react'

interface BlogPageIDProps {
    params: Promise<{blogId: string}>
}

async function BlogPageID({params}: BlogPageIDProps) {
    const id = (await params).blogId;
    console.log(id)

    return (
        <div>BlogPageID</div>
    )
}

export default BlogPageID