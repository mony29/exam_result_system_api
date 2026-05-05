# Inspired by
- Why MOEYS not upload national exam result on their own website
- BASE_URL: https://exam-result-system-api-1.onrender.com   
- BASE_URL/api/result?id=123
- FRONT: https://github.com/mony29/exam_result_system_ui

# 📊 Exam Result Lookup System API (MVP)

## 🧠 Overview

This is a high-performance exam result lookup system built using:

- Node.js
- TypeScript
- Express.js
- In-memory data structure (Map)

It is designed to simulate a real-world national exam result system where users can search results by Student ID instantly.

---

## 🚀 Core Idea

Instead of using database queries per request, all student data is loaded into memory at startup.

This enables:

- ⚡ Extremely fast lookup (O(1))
- 🚫 No database bottleneck
- 📈 High scalability for traffic spikes

---

## 🏗️ Architecture (Current Version)
- Client (Postman / Browser)
↓
- Express API (Node.js)
↓
- In-Memory Map (Student Data)
↓
- Instant Response


---

## 📦 Data Structure

Each student record:

```json
{
  "id": "1",
  "name": "John Doe",
  "gender": "male",
  "dateOfBirth": "1990-01-01",
  "grade": "A",
  "score": 95
}
```

GET http://localhost:3000/api/result/student?id=1

Success Response:
```json
{
  "success": true,
  "data": {
    "id": "1",
    "name": "John Doe",
    "grade": "A",
    "score": 95
  }
}
```

Error Response
```json
{
  "success": false,
  "message": "Student not found"
}
```


# 🧩 IMPORTANT: How we will use README next

From now on:

👉 Every time we improve system, we will:
- Update README version
- Track architecture changes
- Keep history clean

So this becomes your **engineering journal**

---

# 🧪 NEXT STEP: Load Testing (Exam Day Simulation)

Now we test your system like real life:

---

## 🎯 Goal

Simulate:

- 100 users → baseline
- 1,000 users → stress test
- 5,000+ users → exam peak simulation

---

## 🛠️ Recommended tool: `autocannon`

Install:

```bash id="load1"
npm install -g autocannon
autocannon --version
```

## 🧪 Load Testing Results (v2)

Test: autocannon (local environment)

- Concurrency: 100 users
- Duration: 30 seconds

### Results:
- Avg Requests/sec: ~7,500
- Peak Requests/sec: ~8,000
- Avg Latency: ~12.8 ms
- p99 Latency: ~23 ms
- Max Latency: ~108 ms

### Conclusion:
System handles high concurrent traffic efficiently using in-memory Map lookup.


## 🛡️ Rate Limiting Test (v5)
```json
run script: node loadtest.js
```
Test: autocannon (single IP simulation)

- Concurrency: 100 users
- Duration: 10 seconds

### Results:
- 60 successful requests (2xx)
- ~62,000 blocked requests (429)

### Conclusion:
Rate limiting is working correctly, protecting the system from excessive requests per IP.

Req/Bytes counts sampled once per second.
# of samples: 30

118k requests in 30.06s, 0 B read

Test finished!
Requests/sec: 0
Latency avg: 0 ms
