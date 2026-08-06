async function loadSites() {
    const response = await fetch("/.netlify/functions/get-sites");
    const sites = await response.json();

    const grid = document.querySelector(".site-grid");
    grid.innerHTML = "";

    sites.forEach((site) => {
        const card = createSiteCard(site);
        grid.appendChild(card);
    });
}

function createSiteCard(site) {
    const link = document.createElement("a");
    link.href = `site.html?id=${site.id}`;
    link.className = "site-card";
//<!-- Note CSS Naming Conventions, BEM (single dash) is component and (double dash) is element -->

    link.innerHTML = `
    <img class="site-card__thumbnail" src="https://via.placeholder.com/400x225" alt="Thumbnail of ${site.name}">
    <div class="site-card__body">
        <h2 class="site-card__name">${site.name}</h2>
        <p class="site-card__url">${site.url}</p>
        <span class="site-card__status site-card__status--${site.status}">${site.status === "online" ? "Online" : "Offline"}</span>
        <p class="site-card__meta">Visitors today: ${site.visitorsToday}</p>
        <p class="site-card__meta">Last deployed: ${site.lastDeployed}</p>
    </div>
    `;

    return link;
}
loadSites();