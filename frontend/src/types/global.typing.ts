export interface ICompany {
  id: string;
  name: string;
  size: string;
  createdAt: string;
}
export interface ICompanyCreateDto {
  name: string;
  size: string;
}
export interface IJob {
  id: string;
  title: string;
  level: string;
  companyID: string;
  companyName: string;
  createdAt: string;
}
export interface IJobCreateDto {
  title: string;
  level: string;
  companyID: string;
}
export interface ICandidate {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resume: string;
  coverLetter: string;
  jobID: string;
  jobTitle: string;
}
export interface ICandidateCreateDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  coverLetter: string;
  jobID: string;
}
