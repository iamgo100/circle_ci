from flask import Flask, render_template
app = Flask(__name__)
app.config['SECRET_KEY'] = 'ffcbb1af81d63144389a5d6e'

@app.route("/")
def main():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(
        host="localhost",
        port=5555
    )