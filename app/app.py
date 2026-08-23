from flask import Flask, render_template
import os
import socket

app = Flask(__name__)

@app.route("/")
def home():
    return render_template(
        "index.html",
        application="Project 15 — Advanced AWS CI/CD",
        environment=os.getenv("ENVIRONMENT", "production"),
        hostname=socket.gethostname()
    )

@app.route("/health")
def health():
    return {"status": "healthy"}

if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
