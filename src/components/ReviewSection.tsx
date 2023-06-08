import { ReviewScoreStars } from '.';

function ReviewSection({
  reviewArray,
  reviewScore,
}: {
  reviewArray: any[];
  reviewScore: number;
}) {
  // const userInitials = review.username.split(' ').map(e => e[0]).join().slice(0,2)

  return (
    <div>
      <div className="flex flex-col sm:items-center py-2 sm:py-4 border-y-[1px] border-y-primary-300">
        <h4 className="font-dm-sans text-xl sm:text-4xl">REVIEWS</h4>
        <div className="flex gap-3 items-end">
          <ReviewScoreStars score={reviewScore} />
          <p className="leading-none font-dm-sans font-medium">
            {reviewArray.length} Reviews
          </p>
        </div>
      </div>
      <div className="px-1 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
          {reviewArray.map((review, index) => {
            return (
              <div
                className="border-b-[1px] border-primary-300 py-3 sm:py-4"
                key={index}
              >
                <div className="flex gap-4 mb-2 sm:mb-3">
                  <div
                    className="rounded-full bg-primary-700 shrink-0
                    aspect-square flex justify-center items-center
                    min-w-[3rem] p-2"
                  >
                    <p className="font-open-sans font-semibold text-lg text-white">
                      {review.username
                        .split(' ')
                        .map((el) => el[0])
                        .join('')
                        .slice(0, 2)}
                    </p>
                  </div>
                  <div>
                    <p className="font-open-sans font-semibold">
                      {review.username}
                    </p>
                    <ReviewScoreStars score={review.score} />
                  </div>
                  <p className="font-open-sans self-start ml-auto">
                    {new Date(review.datePublished).toLocaleString('en-US', {
                      month: 'numeric',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </div>
                <div>
                  <p className="font-open-sans font-bold text-xl">
                    {review.header}
                  </p>
                  <p className="font-open-sans">{review.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default ReviewSection;
