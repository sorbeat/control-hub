exports.handler = async function (event, context) {
    const sites = [
        {
            id: 1,
            name: "SeagullsView",
            url: "seagullsviewcintsa.com",
            status: "online",
            visitorsToday: 128,
            lastDeployed: "2 hours ago"
        },
        {
            id: 2,
            name: "SurfWithMitch",
            url: "surfwithmitch.netlify.app",
            status: "online",
            visitorsToday: 128,
            lastDeployed: "2 hours ago"
        },
    ];
    return {
        statusCode: 200,
        body: JSON.stringify(sites),
    };
};