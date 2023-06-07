function ReviewScoreStars({ score }: { score: number }) {
  const reviewScorePercentage = `${Math.floor(score * 20)}%`;

  return (
    <div className="flex items-center">
      <div
        className={`inline-block bg-review-score leading-none text-xl grow-0
             shrink-0 before:content-["★★★★★"] before:tracking-tighter
                        bg-clip-text text-transparent`}
        style={{ '--scorePercentage': reviewScorePercentage }}
      />
    </div>
  );
}
export default ReviewScoreStars;
