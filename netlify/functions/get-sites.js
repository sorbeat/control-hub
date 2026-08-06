exports.handler = async function (event, context) {
    const token = process.env.NETLIFY_API_TOKEN;
    const sitesId = "d6bf2101-0f09-499c-a7aa-777493ec7d82";

    const response = await fetch(`https://api.netlify.com/api/v1/sites/${sitesId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
const data = await response.json();

    const site = {
        id: data.id,
        name: data.name,
        url: data.url,
        status: data.published_deploy ? "online" : "offline",
        lastDeployed: data.published_deploy?.published_at,
};

    return {
        statusCode: 200,
        body: JSON.stringify([site]),
    };
};