import { IconFolderCode } from "@tabler/icons-react"
import { ArrowUpRightIcon , Ban } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import Link from "next/link"
export function NotFoundData() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Ban />
        </EmptyMedia>
        <EmptyTitle>Oopss Your&apos;re in the Wrong Page</EmptyTitle>
        <EmptyDescription>
          The page you’re looking for doesn’t exist or has been moved. Get started by creating
          your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Link href="/"><Button>Home</Button></Link>
          <Button variant="outline">Docs</Button>
        </div>
      </EmptyContent>
      <Button
        variant="link"
        asChild
        className="text-muted-foreground"
        size="sm"
      >
        <Link href="/">
          Learn More <ArrowUpRightIcon />
        </Link>
      </Button>
    </Empty>
  )
}
