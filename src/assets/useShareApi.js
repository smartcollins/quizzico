import {useState} from 'react'

const useShareApi = (object) => {
    const [shareContent, setShareContent] = useState(object);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    
    const shareButton = async () => {
        if (navigator.share) {
          try {
            await navigator.share(shareContent);
            setSuccess('Content was shared successfully.');
            setError(null)
          } catch (err) {
            setError('Error while sharing content: ', err);
            setSuccess(null)
          }
        } else {
            setError.error('The Web Share API is not supported in this browser.');
            setSuccess(null)
        }
      };
  return [success, error, shareButton]
}

export default useShareApi

  

  