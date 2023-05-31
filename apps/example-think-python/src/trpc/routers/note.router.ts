import { z } from "zod";
import { ZLocation, protectedProcedure, router } from "../utils";
import { defaultNoteColor } from "@/contexts/note-highlight";

const NoteRouter = router({
	getByLocation: protectedProcedure
		.input(z.object({ location: ZLocation }))
		.query(async ({ ctx, input }) => {
			const { id } = ctx.user;
			const res = await ctx.prisma.note.findMany({
				where: {
					userId: id,
					chapter: input.location.chapter,
				},
			});
			return res;
		}),

	getAll: protectedProcedure.query(async ({ ctx }) => {
		const { id } = ctx.user;
		return await ctx.prisma.note.findMany({
			where: {
				userId: id,
			},
		});
	}),

	create: protectedProcedure
		.input(
			z.object({
				y: z.number(),
				noteText: z.string().optional(),
				highlightedText: z.string(),
				color: z.string().optional(),
				location: ZLocation,
			}),
		)
		.mutation(async ({ ctx, input }) => {
			const { id } = ctx.user;
			return await ctx.prisma.note.create({
				data: {
					noteText: input.noteText,
					highlightedText: input.highlightedText,
					y: input.y,
					chapter: input.location.chapter,
					color: input.color || defaultNoteColor,
					userId: id,
				},
			});
		}),

	update: protectedProcedure
		.input(
			z.object({
				id: z.string(),
				noteText: z.string().optional(),
				color: z.string().optional(),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			return await ctx.prisma.note.update({
				where: {
					id: input.id,
				},
				data: {
					noteText: input.noteText,
					color: input.color,
				},
			});
		}),

	delete: protectedProcedure
		.input(z.object({ id: z.string() }))
		.mutation(async ({ ctx, input }) => {
			return await ctx.prisma.note.delete({
				where: {
					id: input.id,
				},
			});
		}),
});

export default NoteRouter;