export interface AttorneyCredential {
  label: string;
  value: string;
}

export interface AttorneyProfile {
  name: string;
  title: string;
  photoUrl: string;
  credentials: AttorneyCredential[];
}
