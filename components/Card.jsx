import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import Link from "next/link";

export default function DisplayFrontCard({ href, img, title, description }) {
  return (
    <Card className="max-w-[24rem] overflow-hidden hover:bg-gray-100 cursor-pointer">
      <Link href={href}>
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none px-5 pt-5"
        >
          <img src={img} alt={title} className="rounded-md" />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">
            {title}
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            {description}
          </Typography>
        </CardBody>
      </Link>
    </Card>
  );
}
