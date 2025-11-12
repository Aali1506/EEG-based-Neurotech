export const calculatePrediction = (
  score: number,
  correctAnswers: boolean[],
  timeTaken: number,
  patientName: string
): string => {
  const predictions: string[] = [];

  if (score < 7) {
    predictions.push(`${patientName}, MIGHT HAVE PROSOPAGNOSIA`);
  }

  const first5Correct = correctAnswers.slice(0, 5).filter(a => a).length;
  if (first5Correct < 3) {
    if (!predictions.includes(`${patientName}, MIGHT HAVE PROSOPAGNOSIA`)) {
      predictions.push(`${patientName}, MIGHT HAVE PROSOPAGNOSIA`);
    }
  }

  const last3Correct = correctAnswers.slice(7, 10).filter(a => a).length;
  if (last3Correct < 2) {
    predictions.push(`${patientName}, MIGHT HAVE ADHD`);
  }

  if (timeTaken < 90) {
    if (!predictions.includes(`${patientName}, MIGHT HAVE ADHD`)) {
      predictions.push(`${patientName}, MIGHT HAVE ADHD`);
    }
  }

  if (predictions.length === 0) {
    return `${patientName}, No significant concerns detected`;
  }

  return predictions.join(' and ');
};
