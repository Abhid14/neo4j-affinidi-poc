// src/schema.ts
import { gql } from 'graphql-tag';

export const typeDefs = gql`
enum UserRole {
  EMPLOYER
  RECRUITER
  JOBSEEKER
}

type user {
  userId: ID! @unique
  Name: String!
  Email: String! @unique
  Password: String!
  Role: UserRole!
}

enum JobType {
  FULL_TIME
  PART_TIME
  CONTRACT
  FREELANCE
  INTERNSHIP
}

enum JobMode {
  ONSITE
  REMOTE
}

type Jobs {
  Jobid: ID! @unique
  CompanyName: String!
  LogoUrl: String!
  Position: String!
  Salary: String!
  JobType: JobType!
  JobMode: JobMode!
  Location: String!
  JobDescription: String!
  AboutCompany: String!
  Skills: [String!]!
  Information: String!
  Experience: Int!
  employer: Employer! @relationship(type: "POSTED_BY", direction: IN)
  applicants:[JobSeeker!]! @relationship(type: "APPLIED_TO", direction: IN)
  recruiter: [Recruiter!]! @relationship(type: "MANAGES", direction: IN)
}

type JobSeeker {
  jobseekid: ID! @unique
  Name: String!
  Email: String! 
  JobsApplied: [Jobs!]! @relationship(type: "APPLIED_TO", direction: OUT)
}

type Employer {
  Empid: ID! @unique
  Name: String
  Email: String! 
  Jobsposted: [Jobs!]! @relationship(type: "POSTED_BY", direction: OUT)
}
type Recruiter {
  Recid: ID! @unique
  Name: String!
  Email: String!
  Manges: [Jobs!]! @relationship(type: "MANAGES", direction: OUT)
}
`;
