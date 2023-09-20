import { storage, ID } from "@/appwrite";
import { AppwriteException } from "appwrite";

const getParticipantImages = async (): Promise<any> => {
  try {
    const response = await storage.listFiles(
      process.env.NEXT_PUBLIC_APPWRITE_PARTICIPANT_IMAGE_BUCKET_ID!
    );
    return response;
  } catch (error) {
    if (error instanceof AppwriteException) return error.response;
    else return error;
  }
};

const uploadParticipantImages = async (file: File): Promise<any> => {
  try {
    const response = await storage.createFile(
      process.env.NEXT_PUBLIC_APPWRITE_PARTICIPANT_IMAGE_BUCKET_ID!,
      ID.unique(),
      file
    );
    return response;
  } catch (error) {
    if (error instanceof AppwriteException) return error.response;
    else return error;
  }
};

const uploadParticipantDocument = async (file: File): Promise<any> => {
  try {
    const response = await storage.createFile(
      process.env.NEXT_PUBLIC_APPWRITE_PARTICIPANT_DOCUMENT_BUCKET_ID!,
      ID.unique(),
      file
    );
    return response;
  } catch (error) {
    if (error instanceof AppwriteException) return error.response;
    else return error;
  }
};

const previewParticipantImageURL = (fileId: string) => {
  const response = storage.getFileView(
    process.env.NEXT_PUBLIC_APPWRITE_PARTICIPANT_IMAGE_BUCKET_ID!,
    fileId
  );
  return response.href;
};

const previewParticipantDocumentURL = (fileId: string) => {
  const response = storage.getFileView(
    process.env.NEXT_PUBLIC_APPWRITE_PARTICIPANT_DOCUMENT_BUCKET_ID!,
    fileId
  );
  return response.href;
};

export {
  getParticipantImages,
  previewParticipantImageURL,
  previewParticipantDocumentURL,
  uploadParticipantImages,
  uploadParticipantDocument,
};
