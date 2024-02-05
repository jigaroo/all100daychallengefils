const loadCommentBtnElement = document.getElementById('load-comments-btn');
const commentsSectionElement = document.getElementById('comments');
const commentsFormElement = document.querySelector('#comments-form form');
const commentTitleElement = document.getElementById('title');
const commentTextElement = document.getElementById('text');

function createCommentsList(comments){
    const commentsListElement = document.createElement('ol');

    for(const comment of comments){
        const commentElement = document.createElement('li');
        commentElement.innerHTML = `
        <article class="comment-item">
            <h2>${comment.title}</h2>
            <p>${comment.text}</p>
        </article>
      `;
      commentsListElement.appendChild(commentElement);
    }
    return commentsListElement;
}

async function fetchCommentsForPost(){
    const postId = loadCommentBtnElement.dataset.postid;
    try{
        const response = await fetch(`/posts/${postId}/comments`);
    
        if(!response.ok){
            alert('fetching comments failed');
            return;
        }
        const responseData = await response.json();
    
        if(responseData && responseData.length >0){
    
            const commentsListElement = createCommentsList(responseData);
            commentsSectionElement.innerHTML='';
            commentsSectionElement.appendChild(commentsListElement);
        }else {
            commentsSectionElement.firstElementChild.textContent='we could not find comments.';
        }

    }catch(erorr){
        alert('getting comment failed!');
    }
    
}

async function savecomment(event){
    event.preventDefault();
    const postId = commentsFormElement.dataset.postid;

    const enteredTitle = commentTitleElement.value;
    const enteredText = commentTextElement.value;

    const comment = { title:enteredTitle,text:enteredText};
    try{
        const response = await fetch(`/posts/${postId}/comments`,{
            method:'POST',
            body:JSON.stringify(comment),
            headers:{
                'Content-Type':'application/json'
            }
        });

        if(response.ok){
    
            fetchCommentsForPost();
        }else{
            alert('could not send comment!');
        }
    }catch(erorr){
        alert('could not sent request - maybe try again later!');
    }

}

loadCommentBtnElement.addEventListener('click',fetchCommentsForPost);
commentsFormElement.addEventListener('submit',savecomment);