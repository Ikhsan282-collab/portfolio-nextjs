import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { sendContactNotification } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Data tidak valid",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    try {
      await sendContactNotification(parsed.data);
    } catch (emailError) {
      console.error("Gagal mengirim email notifikasi:", emailError);
      return NextResponse.json(
        { success: false, message: "Gagal mengirim pesan, coba lagi nanti" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Pesan berhasil dikirim",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error di /api/contact:", error);
    return NextResponse.json(
      { success: false, message: "Terjadi kesalahan pada server" },
      { status: 500 }
    );
  }
}