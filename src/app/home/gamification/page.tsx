'use client'

import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getNameByEmail } from "@/functions/getNameByEmail";
import { CircleCheckIcon, GiftIcon, LightbulbIcon, MedalIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { ComingSoon } from "@/components/home/comingsoon";

export default function Page() {
  return (
    <ComingSoon/>  
  )
}

