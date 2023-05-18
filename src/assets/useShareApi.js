import { useState } from "react";

const useShareApi = (object) => {
  // eslint-disable-next-line no-unused-vars
  const [shareContent, setShareContent] = useState(object);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [success, setSuccess] = useState(null);

  const shareButton = async () => {
    if (navigator.share) {
      console.log(navigator);
      try {
        await navigator.share(shareContent);
        setSuccess("Content was shared successfully.");
        setError(null);
      } catch (err) {
        setError("Error while sharing content: ", err);
        setSuccess(null);
      }
    } else {
      setError("The Web Share API is not supported in this browser.");
      setSuccess(null);
    }
  };
  return shareButton;
};

export default useShareApi;
