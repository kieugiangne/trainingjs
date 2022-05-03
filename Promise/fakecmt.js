var users = [
    {
        id: 1,
        name: "Kiều Giang"
    },
    {
        id: 2,
        name: "Văn A"
    },
    {
        id: 3,
        name: "Nguyễn B"
    },
];

var comments = [
    {
        id: 1,
        users_id: 1,
        content: 'Hình ảnh đẹp quá'
    }, 
    {
        id: 2,
        users_id: 2,
        content: 'Cảm ơn bạn'
    }, 
];

function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments)
        }, 1000);
    });
}

function getUsersByIds(userIds) {
    return new Promise(function(resolve) {
        var result = users.filter(function(user) {
            return userIds.includes(user.id)
        });
        setTimeout(function() {
            resolve(result);
        }, 1000);
    });
}

getComments()
    .then(function(comments) {
        var userIds = comments.map(function(comment) {
            return comment.users_id;
        });
        return getUsersByIds(userIds)
            .then(function(users) {
                return {
                users: users,
                comments: comments,
                };
            });
    })
    .then(function(data) {
        
        var commentBlock = document.getElementById('comment-block');

        var html = '';
        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user) {
                return user.id === comment.user_id;
            });
            html += `${user.name}: ${comment.content}`;
        });
        commentBlock.innerHTML = html;
    });

