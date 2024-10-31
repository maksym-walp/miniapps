function performFrequencyAnalyzer(text, groupSize) {
  const frequencies = {};
  const normalizedText = text.toLowerCase(); // Ігноруємо регістр

  for (let i = 0; i <= normalizedText.length - groupSize; i += groupSize) {
    const group = normalizedText.slice(i, i + groupSize);

    if (frequencies[group]) {
      frequencies[group]++;
    } else {
      frequencies[group] = 1;
    }
  }

  const sortedFrequencies = Object.entries(frequencies)
    .map(([group, count]) => ({ group, count }))
    .sort((a, b) => b.count - a.count);

  return sortedFrequencies;
}

export default performFrequencyAnalyzer;
