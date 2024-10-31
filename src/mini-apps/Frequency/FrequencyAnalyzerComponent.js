import { useState } from 'react';
import performFrequencyAnalysis from './FrequencyAnalyzerScript.js';
import '../../styles/Frequency.css';

function FrequencyAnalyzer() {
  const [text, setText] = useState('');
  const [groupSize, setGroupSize] = useState(1);
  const [analysisResult, setAnalysisResult] = useState([]);

  const handleAnalyze = () => {
    const result = performFrequencyAnalysis(text, groupSize);
    setAnalysisResult(result);
  };

  return (
    <div className="frequency-analyzer">
      <h2>Частотний аналіз</h2>
      <textarea
        placeholder="Введіть текст для аналізу"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        min="1"
        placeholder="Розмір групи символів"
        value={groupSize}
        onChange={(e) => setGroupSize(Number(e.target.value))}
      />
      <button onClick={handleAnalyze}>Аналізувати</button>

      <table>
        <thead>
          <tr>
            <th>Група символів</th>
            <th>Кількість разів</th>
          </tr>
        </thead>
        <tbody>
          {analysisResult.map((item, index) => (
            <tr key={index}>
              <td>{item.group}</td>
              <td>{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FrequencyAnalyzer;
