export default interface SocialPostProps {
  user: { username: string };
  following: boolean;
  amount: number;
  type: string;
  createdAt: string;
}
