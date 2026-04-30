import autocannon from "autocannon";

function randomIP() {
  return `10.0.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
}

function randomId() {
  return Math.floor(Math.random() * 100000);
}

const instance = autocannon({
  url: "http://localhost:3000",
  connections: 100,
  duration: 30,
  setupClient: (client) => {
    client.setHeaders({
      "x-forwarded-for": randomIP(),
    });
  },
  requests: [
    {
      method: "GET",
      path: () => `/api/result?id=${randomId()}`,
    },
  ],
});

autocannon.track(instance, { renderProgressBar: true });

instance.on("done", (result) => {
  console.log("\nTest finished!");
  console.log(`Requests/sec: ${result.requests.average}`);
  console.log(`Latency avg: ${result.latency.average} ms`);
});