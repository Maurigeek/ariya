// src/services/auth.js
export async function getAuthToken() {
    const url = 'https://pub-za.appcubecloud.com/baas/auth/v1.0/oauth2/token';
  
    // Prepare the data
    const formData = new URLSearchParams();
    formData.append('grant_type', 'client_credentials');
    formData.append('client_id', '6e4e70085092b692f0ca5c375043d8ff');
    formData.append('client_secret', 'f42b2f4e9fc3786939db3b0687b9b2846ec3d3fb3561f5ff');
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'no-cors', // Adding 'no-cors'
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
      });
  
      // With 'no-cors', you won't be able to access the response data
      console.log('Request sent. Note: No response available in no-cors mode.');
      return null;
    } catch (error) {
      console.error('Erreur lors de l\'authentification:', error);
      throw error;
    }
  }
  