import { Server, Request, ResponseToolkit } from '@hapi/hapi'
import { alwaysBlue } from '@santima10/always-blue'

const init = async () => {

    const server = new Server({
        port: process.env.PORT || 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (_: Request, h: ResponseToolkit) => {
            return h.response(alwaysBlue()).code(200)
        }
    });

    await server.start();
    console.log('server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();