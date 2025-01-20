import Image from "next/image";
import blogBanner from "../../../public/assets/images/blog-cover.jpg";
import blogBanner2 from "../../../public/assets/images/blog-cover2.jpg";
import blogBanner3 from "../../../public/assets/images/blog-cover3.jpg";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BlogPage() {
  return (
    <div>
      <div className="relative w-full h-96">
        <Image
          className="absolute w-full h-full object-cover"
          src={blogBanner}
          alt="banner untuk blog"
        />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
          <h1 className="text-[1.6rem] text-center px-3 md:text-4xl lg:text-5xl font-bold uppercase text-coolyellow">
            Blog
          </h1>
          {/* <h2 className="text-base p-4 md:px-8 xl:px-0 text-center md:text-xl md:p-0 lg:text-xl mt-2">
                      <CompanyVision />
                    </h2> */}
        </div>
        <div className="absolute inset-0 bg-black opacity-50 z-0" />
      </div>
      <div className="px-16 py-14 h-[900px]">
        <div className="grid grid-cols-4 gap-5">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Ini adalah card</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Ini adalah card</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Ini adalah card</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Ini adalah card</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Ini adalah card</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Ini adalah card</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
