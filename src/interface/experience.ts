export default interface experience {
  id: number;
  attributes: {
    company_name: string;
    start_date: Date;
    end_date: Date;
    role: string;
    description: string;
  };
}
