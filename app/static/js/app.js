async function checkSystemHealth() {
    const status = document.getElementById("system-status");
    const message = document.getElementById("status-message");

    try {
        const response = await fetch("/health", {
            cache: "no-store"
        });

        if (!response.ok) {
            throw new Error("Health check failed");
        }

        const data = await response.json();

        if (data.status === "healthy") {
            status.textContent = "System Operational";
            message.textContent =
                "Production health check passed successfully.";
        } else {
            status.textContent = "System Degraded";
            message.textContent =
                "Application responded but reported an unhealthy state.";
        }

    } catch (error) {
        status.textContent = "Connection Error";
        message.textContent =
            "Unable to reach the application health endpoint.";
    }
}

checkSystemHealth();

setInterval(checkSystemHealth, 30000);
