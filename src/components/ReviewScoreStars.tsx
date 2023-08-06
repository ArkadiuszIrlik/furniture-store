function ReviewScoreStars({ score }: { score: number }) {
  const reviewScorePercentage = `${Math.floor(score * 20)}%`;

  return (
    <div className="flex items-center">
      <div
        className={`inline-block shrink-0 grow-0 bg-review-score bg-clip-text
             text-xl leading-none text-transparent
                        before:tracking-tighter before:content-["★★★★★"]`}
        style={
          { '--scorePercentage': reviewScorePercentage } as React.CSSProperties
        }
      />
    </div>
  );
}
export default ReviewScoreStars;
