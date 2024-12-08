import { useEffect, useState } from "react";
import axios from "axios";

function Gender(){
    let [data,setData] = useState([]);


    function predictGender() {
        const name = document.getElementById('nameInput').value;
        if (name === '') {
            alert('Please enter a name.');
            return;
        }

        const apiUrl = `https://api.genderize.io/?name=${name}`;
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                displayResult(name, data);
            })
            .catch(error => {
                console.error('Error fetching gender prediction:', error);
            });
    }

    function displayResult(name, data) {
        const resultDiv = document.getElementById('result');
        const resultNameSpan = document.getElementById('resultName');
        const resultGenderSpan = document.getElementById('resultGender');
        const resultProbabilitySpan = document.getElementById('resultProbability');

        resultNameSpan.textContent = name;
        resultGenderSpan.textContent = data.gender;
        resultProbabilitySpan.textContent = `${(data.probability * 100)}%`;

        resultDiv.style.display = 'block';
    }

    return(
        <div className="Jai">
            <h1>Gender Prediction</h1>
            <input type="text" id="nameInput" placeholder="Enter a name"/>
            <button onClick={predictGender}>Predict</button>
            <div id="result">
                <div class="result-item">
                    <span class="result-label">Name:</span> <span id="resultName"></span>
                </div>
                <div class="result-item">
                    <span class="result-label">Gender:</span> <span id="resultGender"></span>
                </div>
                <div class="result-item">
                    <span class="result-label">Probability:</span> <span id="resultProbability"></span>
                </div>
            </div>

        </div>
    )
}
export default Gender;