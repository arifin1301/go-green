module.exports = (express, app, default_router) => {
    require('./user.route')(express, app, default_router)
    require('./post.route')(express, app, default_router)
    require('./waste.route')(express, app, default_router)
    require('./bookmark.route')(express, app, default_router)

}